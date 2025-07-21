// utils/handleParseError.ts
import { router } from 'expo-router';

export const handleParseError = (error: any) => {
  if (error.message?.includes('You need to call Parse.initialize')) {
    console.error('Parse not initialized — redirecting to login');
    setTimeout(() => {
        router.replace('/errorSignOut');
    }, 0);
  } else {
    throw error; // re-throw if it's not that specific error
  }
};
