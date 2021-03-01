// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import Cimage from 'components/common/cImage'

// Component
const LgImage = ({className, data}) => {
  return (
    <div className={className}>
      <Cimage
        src={data.image.src}
        alt="Picture of the author"
        width={data.image.width}
        height={data.image.height}
        layout="responsive"
      />
    </div>
  )
}

LgImage.defaultProps = {
  data: {
    "id": 1,
    "type": "lgImage",
    "widthInCols": 10,
    "image": {
      "src": "/info/me.jpg",
      "alt": "",
      "width": 1221,
      "height": 657
    }
  }
};

// Export
export default styled(LgImage)`
  margin: 15px 30px;

  @media ${breakpoint.md} {
    ${({data}) => container(data.widthInCols, 0)}
  }

  & > div {
    border-radius: 10px;
    // box-shadow: 0 30px 200px rgb(62 62 70 / 15%);
  }

  + div,
  + p {
    margin-top: ${columnWidth(1)};
  }
`
