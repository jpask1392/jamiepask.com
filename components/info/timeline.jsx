// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import tinycolor from 'tinycolor2'
import parse from 'html-react-parser'

// Component
const Timeline = ({className, data, bg}) => {
  return (
    <div className={className}>
      <div className="date">
        <time>{`${data.dateStart}\n${data.dateEnd}`}</time>
        <span></span>
      </div>
      <div className="content">
        <h3>{data.company}</h3>
        {parse(data.content)}
      </div>
    </div>
  )
}

// Export
export default styled(Timeline)`
  margin: 15px 30px;
  display: flex;
  flex-wrap: wrap;
  color: ${({bg}) => bg && tinycolor(bg).isDark() ? 'white' : 'black'};

  @media ${breakpoint.md} {
    ${container(10, 0)}
  }

  + div {
    padding-top: ${columnWidth(1)};
  }

  .date {
    display: flex;
    width: ${columnWidth(2)};
    color: #062979;
    flex: 1;
    margin-bottom: 15px;

    @media ${breakpoint.md} {
      margin-bottom: 0;
    }

    @media ${breakpoint.lg} {
      flex: inherit;
    }

    time {
      white-space: pre-line;
      line-height: 1.66;
      transform: translateY(-12px);

      @media ${breakpoint.md} {
        margin-bottom: 0;
      }
    }

    span {
      flex: 1;
      height: 1px;
      background: black;
      margin: 0 20px;
      transform: translateY(8px);
    }
  }

  .content {
    flex: 1;
    flex-basis: 100%;

    @media ${breakpoint.lg} {
      flex-basis: 0;
    }

    p {
      white-space: pre-line;
      margin-top: 3rem;
    }

    ul {
      font-size: 20px;
      padding-left: 1.5rem;
      margin-top: 3rem;
    }

    li {
      padding-left: 0.5rem;

      &:not(:last-of-type) {
        margin-bottom: 5px;
      }
    }
  }

`
