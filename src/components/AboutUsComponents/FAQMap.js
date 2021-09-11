import React from "react"
import { FAQ } from "./FAQ"

const FAQMap = () => {
  const FAQData = [
    {
      question:
        "What traditions of Acupuncture and Eastern Medicine are taught at the school?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius, orci a accumsan tempus, libero orci lobortis ante, id consectetur mauris turpis ut nunc. Cras facilisis mi magna, vel tincidunt metus volutpat sed. Nullam sit amet libero lorem. Suspendisse sed luctus lorem, at malesuada urna. Nulla feugiat tempor urna eget vestibulum. Sed eu erat et leo aliquam dictum. Vivamus vulputate tortor nibh, egestas aliquam tortor volutpat ultrices. Quisque sit amet diam a diam porttitor fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dignissim eros eu ultrices porta. Nullam rhoncus, elit sollicitudin luctus pharetra, elit odio dignissim ante, quis fringilla dolor neque quis diam.",
    },
    {
      question: "Is the curriculum comprehensive and complete?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius, orci a accumsan tempus, libero orci lobortis ante, id consectetur mauris turpis ut nunc. Cras facilisis mi magna, vel tincidunt metus volutpat sed. Nullam sit amet libero lorem. Suspendisse sed luctus lorem, at malesuada urna. Nulla feugiat tempor urna eget vestibulum. Sed eu erat et leo aliquam dictum. Vivamus vulputate tortor nibh, egestas aliquam tortor volutpat ultrices. Quisque sit amet diam a diam porttitor fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dignissim eros eu ultrices porta. Nullam rhoncus, elit sollicitudin luctus pharetra, elit odio dignissim ante, quis fringilla dolor neque quis diam.",
    },
    {
      question:
        "How does the school prepare you for successful entry into the professional field?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius, orci a accumsan tempus, libero orci lobortis ante, id consectetur mauris turpis ut nunc. Cras facilisis mi magna, vel tincidunt metus volutpat sed. Nullam sit amet libero lorem. Suspendisse sed luctus lorem, at malesuada urna. Nulla feugiat tempor urna eget vestibulum. Sed eu erat et leo aliquam dictum. Vivamus vulputate tortor nibh, egestas aliquam tortor volutpat ultrices. Quisque sit amet diam a diam porttitor fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dignissim eros eu ultrices porta. Nullam rhoncus, elit sollicitudin luctus pharetra, elit odio dignissim ante, quis fringilla dolor neque quis diam.",
    },
    {
      question: "Why Choose Eight Branches?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius, orci a accumsan tempus, libero orci lobortis ante, id consectetur mauris turpis ut nunc. Cras facilisis mi magna, vel tincidunt metus volutpat sed. Nullam sit amet libero lorem. Suspendisse sed luctus lorem, at malesuada urna. Nulla feugiat tempor urna eget vestibulum. Sed eu erat et leo aliquam dictum. Vivamus vulputate tortor nibh, egestas aliquam tortor volutpat ultrices. Quisque sit amet diam a diam porttitor fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dignissim eros eu ultrices porta. Nullam rhoncus, elit sollicitudin luctus pharetra, elit odio dignissim ante, quis fringilla dolor neque quis diam.",
    },
  ]

  return FAQData.map((item, index) => (
    <FAQ question={item.question} answer={item.answer} index={index} />
  ))
}

export default FAQMap
