export default function addSong(input: string, Array: Array<string>) {
  if (input.includes("https://youtu.be/") === true) {
    input = input.replace(
      "https://youtu.be/",
      "https://www.youtube.com/embed/"
    );

    Array.push(input);
    return Array;
  } else {
    alert("Syntax error");
    return Array;
  }
}
