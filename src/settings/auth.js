// src/settings/auth.js
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const authenticateUser = async (email, password) => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);

    return true;
  } catch (error) {
    console.error('Error authenticating user:', error.message);
    return false;
  }
};

export { authenticateUser };
