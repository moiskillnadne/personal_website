export type Display = 'flex' | 'block'

export type JustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'

export type AlignItems = 'center' | 'flex-start' | 'flex-end'

export type FlexDirection = 'row' | 'column'

type Input = {
  display?: Display
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  flexDirection?: FlexDirection
  className?: string
}

export class BoxStyleConstructService {
  public static constuct(input: Input): string | undefined {
    const classNames: string[] = []

    if(input.className) {
      classNames.push(input.className)
    }

    if(input.display) {
      classNames.push(this.applyDisplayStyle(input.display))
    }

    if(input.justifyContent) {
      classNames.push(this.applyJustifyContent(input.justifyContent))
    }

    if(input.alignItems) {
      classNames.push(this.applyAlignItems(input.alignItems))
    }

    if(input.flexDirection) {
      classNames.push(this.applyFlexDirection(input.flexDirection))
    }

    if(classNames.length === 0) return undefined

    return classNames.join(' ')
  }

  private static applyDisplayStyle(displayType: Display): string {
    switch (displayType) {
      case 'flex':
        return 'display-flex'
      case 'block':
        return 'display-block'

      default:
        return 'display-block'
    }
  }

  private static applyJustifyContent(justifyContent: JustifyContent): string {
    switch (justifyContent) {
      case 'center':
        return 'justify-center'
      case 'flex-start':
        return 'justify-start'
      case 'flex-end':
        return 'justify-end'
      case 'space-between':
        return 'justify-between'
      case 'space-around':
        return 'justify-around'

      default:
        return 'justify-center'
    }
  }

  private static applyAlignItems(alignItems: AlignItems): string {
    switch (alignItems) {
      case 'center':
        return 'align-center'
      case 'flex-start':
        return 'align-start'
      case 'flex-end':
        return 'align-end'

      default:
        return 'align-center'
    }
  }

  private static applyFlexDirection(flexDirection: FlexDirection): string {
    switch (flexDirection) {
      case 'row':
        return 'flex-direction-row'
      case 'column':
        return 'flex-direction-column'

      default:
        return 'flex-direction-row'
    }
  }
}