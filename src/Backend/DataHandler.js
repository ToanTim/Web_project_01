import { getDatabase } from "firebase/database";
import FireBaseDB from "./FirebaseDB";
import { ref, set, get, update, remove, child } from "firebase/database";
const database = getDatabase();

export async function getData(setState, dataCollectionName) {
  const dbRef = ref(getDatabase());
  await get(child(dbRef, dataCollectionName))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        const data = snapshot.val();
        setState(data);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
