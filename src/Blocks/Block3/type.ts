export type RenderLinkProps = {
  day?: string;
  time?: string;
  type?: string;
  url?: string;
  name?: string;
  text?: string;
  icons?: string;
  links?: {
    url?: string;
    text?: string
  }[]
}