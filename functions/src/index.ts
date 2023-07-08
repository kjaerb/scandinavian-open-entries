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
const db = admin.firestore();

export const addUserAccount = functions.auth.user().onCreate((user) => {
  const userRef = db.collection("users").doc(user.uid);

  const userWithRoles = {
    ...user,
    roles: ["user"],
  };

  return userRef.set(JSON.parse(JSON.stringify(userWithRoles)));
});

export const deleteUserAccount = functions.auth.user().onDelete((user) => {
  const userRef = db.collection("users").doc(user.uid);
  return userRef.delete();
});
