import { Button } from '../_components/Button'
import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'

export default function NotFound() {
  return (
    <Gutter>
      <VerticalPadding top="none" bottom="large">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p>"Now where did that page go?"</p>
        <p>Checking my pockets....</p>
        <p>"Honey!? Have you seen this missing page?"</p>
        <p>"Check the garage, you always leave stuff out there."</p>
        <p>"...it's not out there"</p>
        <p>Let me check my other jacket. You should go jiggle the handle.</p>
        <p>Then try another link.</p>
        <Button href="/" label="Go Home" appearance="primary" />
      </VerticalPadding>
    </Gutter>
  )
}
