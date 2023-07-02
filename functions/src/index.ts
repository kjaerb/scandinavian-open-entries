/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const addUserAccount = functions.auth.user().onCreate((user: any) => {
  const { uid, email } = user;
  const db = admin.firestore();
  const userRef = db.collection("users").doc(uid);
  return userRef.set({ email });
});
