export default function clearSplitStory(story = "") {
  story = story.replaceAll("、", "");
  story = story.replaceAll("\n", "");
  return story
    .split("。")
    .map((st) => st.trim())
    .filter((st) => st);
}
