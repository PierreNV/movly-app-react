import * as Realm from "realm-web";

const realm = new Realm.App({ id: `${process.env.REACT_APP_MONGODB_API_ID}` });

export async function login(email, password) {
  const credentials = Realm.Credentials.emailPassword(email, password);
  const user = await realm.logIn(credentials);
  console.assert(user.id === realm.currentUser.id, "user is already logged in.");
}

export function logout() {
  realm.currentUser?.logOut();
}

export async function confirmUser(token, tokenId) {
  await realm.emailPasswordAuth.confirmUser({ token, tokenId });
}

export async function getCurrentUser() {
  try {
    return realm?.currentUser?.customData;
  } catch (error) {
    return null;
  }
}
export async function getCurrentUserProfile() {
  try {
    return realm?.currentUser?.profile;
  } catch (error) {
    return null;
  }
}

export function getJWT() {
  return realm.currentUser?.accessToken;
}

export async function register(user) {
  await realm.emailPasswordAuth.registerUser({
    email: user.email,
    password: user.password,
  });
}
