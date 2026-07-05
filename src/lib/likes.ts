import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebase";

const LIKE_KEY = (slug: string) => `like:${slug}`;

export async function fetchLikesCount(slug: string): Promise<number> {
  if (typeof window === "undefined") return 0;
  try {
    const docRef = doc(db, "likes", slug);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().count || 0;
    }
    return 0;
  } catch (e) {
    console.error("Error fetching likes from Firebase:", e);
    return 0;
  }
}

export async function toggleLikeInFirebase(slug: string): Promise<{ count: number; liked: boolean }> {
  if (typeof window === "undefined") return { count: 0, liked: false };
  
  const localKey = LIKE_KEY(slug);
  const liked = localStorage.getItem(localKey) === "1";
  const nextLiked = !liked;
  
  const docRef = doc(db, "likes", slug);
  
  try {
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, { count: nextLiked ? 1 : 0 });
    } else {
      await updateDoc(docRef, {
        count: increment(nextLiked ? 1 : -1)
      });
    }
    
    localStorage.setItem(localKey, nextLiked ? "1" : "0");
    
    // Fetch updated count
    const updatedSnap = await getDoc(docRef);
    const count = updatedSnap.exists() ? (updatedSnap.data().count || 0) : 0;
    
    return { count: Math.max(0, count), liked: nextLiked };
  } catch (e) {
    console.error("Error toggling like in Firebase:", e);
    return { count: 0, liked: false };
  }
}
