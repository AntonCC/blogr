import { ReactComponent as Desktop } from '../../assets/illustration-editor-desktop.svg'
import { ReactComponent as Laptop } from '../../assets/illustration-laptop-desktop.svg'

export const banner1Info = {
  bannerTitle: 'Designed for the future',
  image: <Desktop />,
  textContent: [
    {
      title: 'Introducing an extensible editor',
      text: ' Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
    },
    {
      title: 'Robust content management',
      text: 'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'
    }
  ]
}

export const banner2Info = {
  image: <Laptop />,
  textContent: [
    {
      title: 'Free, open, simple',
      text: 'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
    },
    {
      title: 'Powerful tooling',
      text: 'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.'
    }
  ],
  reverseSide: true
}

