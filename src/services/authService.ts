import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '@/firebase';

export interface AdminUser {
  uid: string;
  email: string;
  isAdmin: boolean;
}

export const signInAdmin = async (email: string, password: string): Promise<AdminUser> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    return {
      uid: user.uid,
      email: user.email || '',
      isAdmin: true
    };
  } catch (error) {
    console.error('Admin sign in error:', error);
    throw error;
  }
};

export const signOutAdmin = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Admin sign out error:', error);
    throw error;
  }
};

export const createAdminUser = async (email: string, password: string): Promise<AdminUser> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    return {
      uid: user.uid,
      email: user.email || '',
      isAdmin: true
    };
  } catch (error) {
    console.error('Create admin user error:', error);
    throw error;
  }
};

export const getCurrentAdmin = (): Promise<AdminUser | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      unsubscribe();
      if (user && user.email) {
        resolve({
          uid: user.uid,
          email: user.email,
          isAdmin: true
        });
      } else {
        resolve(null);
      }
    });
  });
};

export const onAdminAuthStateChanged = (callback: (admin: AdminUser | null) => void) => {
  return onAuthStateChanged(auth, (user: User | null) => {
    if (user && user.email) {
      callback({
        uid: user.uid,
        email: user.email,
        isAdmin: true
      });
    } else {
      callback(null);
    }
  });
};