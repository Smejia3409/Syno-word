import axios from "axios";

export const getWords = async () => {
  try {
    let words = await axios.get(
      "http://random-word-api.vercel.app/api?words=100"
    );
    console.log(words.data);

    return words.data;
  } catch (error) {
    console.log(error);
  }
};
