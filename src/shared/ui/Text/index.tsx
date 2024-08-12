import './style.css'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body-regular' | 'body-medium' | 'body-light'

type Props = {
  value: string

  variant?: Variant

  fontSize?: string
  fontWeight?: string
  color?: string
}

function Text(props: Props) {

  const applyVariant = (variant: Variant): string => {
    switch (variant) {
      case 'h1':
        return 'base-font-h1'
      case 'h3':
        return 'base-font-h3'
      case 'h4':
        return 'base-font-h4'
      case 'body-regular':
        return 'base-font-regular'
      case 'body-medium':
        return 'base-font-medium'
      case 'body-light':
        return 'base-font-light'

      default:
        return 'base-font-regular'
    }
  }

  return (
    <p
      className={applyVariant(props.variant || 'body-regular')}
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        color: props.color
      }}>
        {props.value}
      </p>
  )
}

export default Text