import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <article class="popover-hint">
      <h1>Spoilery!</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
