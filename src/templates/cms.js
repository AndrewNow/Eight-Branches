// this document allows us to embed videos into the Netlify CMS posts

//!!!!!!!!!!! this is currently broken though. ive made an Issue on github but still have not gotten a reply
// from: https://www.iliascreates.com/blog/post/embeding-youtube-videos-markdown-gatsby-netlifycms/
import CMS from "netlify-cms-app"

// The pattern attribute defines the regular expression that will look for the line in the markdown content that starts with the string “`youtube: ” and catch anything that comes after it, which in our case is the link to the video.

//The fromBlock attribute defines a function that is responsible to initialize the value of the rendered widget.In other words, it takes the link of the video from the pattern and adds it in the input field of the YouTube widget.

//The toBlock function defines the representation of the YouTube video in the markdown content. To comply with the gatsby-remark-embed-video Gatsby plugin, this needs to be a line that starts with a backtick, followed by the word “youtube: ”, followed by the video link, and ends with another backtick.

CMS.registerEditorComponent({
  id: "youtube",
  label: "YouTube",
  fields: [
    {
      name: "url",
      label: "Youtube video URL",
      widget: "string",
    },
  ],
  pattern: /^`youtube:\s(.*)`$/,
  fromBlock: function (match) {
    return {
      url: match[1],
    }
  },
  toBlock: function (obj) {
    return "`youtube: " + obj.url + "`"
  },
  toPreview: function (obj) {
    return obj.url
  },
})
