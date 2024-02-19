function processTags(inputTags: string): string[] {
    const tags = inputTags.split(",");
    const outTags: string[] = [];

    for (let tag of tags) {
        tag = tag.replace(/ /g, "");
        outTags.push(tag);
    }

    return outTags;
}