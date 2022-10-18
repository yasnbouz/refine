"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87148],{87148:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/mui/src/index.tsx","description":"This field is used to display dates. It uses {@link https://day.js.org/docs/en/display/format `Day.js`} to display date format and\\nMaterial UI {@link https://mui.com/material-ui/react-typography/#main-content `<Typography>`} component","displayName":"DateField","props":{"value":{"defaultValue":null,"description":"The value of the field.","name":"value","required":true,"type":{"name":"string | number | Date | Dayjs | null | undefined"},"tags":{}},"border":{"defaultValue":null,"description":"","name":"border","required":false,"type":{"name":"ResponsiveStyleValue<number | (string & {}) | \\"inset\\" | \\"-moz-initial\\" | \\"inherit\\" | \\"initial\\" | \\"revert\\" | \\"revert-layer\\" | \\"unset\\" | \\"aliceblue\\" | \\"antiquewhite\\" | \\"aqua\\" | \\"aquamarine\\" | \\"azure\\" | ... 185 more ...> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"boxShadow":{"defaultValue":null,"description":"","name":"boxShadow","required":false,"type":{"name":"ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)"},"tags":{}},"fontWeight":{"defaultValue":null,"description":"","name":"fontWeight","required":false,"type":{"name":"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"},"tags":{}},"zIndex":{"defaultValue":null,"description":"","name":"zIndex","required":false,"type":{"name":"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"},"tags":{}},"alignContent":{"defaultValue":null,"description":"","name":"alignContent","required":false,"type":{"name":"ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)"},"tags":{}},"alignItems":{"defaultValue":null,"description":"","name":"alignItems","required":false,"type":{"name":"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"},"tags":{}},"alignSelf":{"defaultValue":null,"description":"","name":"alignSelf","required":false,"type":{"name":"ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)"},"tags":{}},"bottom":{"defaultValue":null,"description":"","name":"bottom","required":false,"type":{"name":"ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"boxSizing":{"defaultValue":null,"description":"","name":"boxSizing","required":false,"type":{"name":"ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"color":{"defaultValue":null,"description":"","name":"color","required":false,"type":{"name":"ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)"},"tags":{}},"columnGap":{"defaultValue":null,"description":"","name":"columnGap","required":false,"type":{"name":"ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"display":{"defaultValue":null,"description":"","name":"display","required":false,"type":{"name":"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"},"tags":{}},"flexBasis":{"defaultValue":null,"description":"","name":"flexBasis","required":false,"type":{"name":"ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"flexDirection":{"defaultValue":null,"description":"","name":"flexDirection","required":false,"type":{"name":"ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"flexGrow":{"defaultValue":null,"description":"","name":"flexGrow","required":false,"type":{"name":"ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"flexShrink":{"defaultValue":null,"description":"","name":"flexShrink","required":false,"type":{"name":"ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"flexWrap":{"defaultValue":null,"description":"","name":"flexWrap","required":false,"type":{"name":"ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"fontFamily":{"defaultValue":null,"description":"","name":"fontFamily","required":false,"type":{"name":"ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)"},"tags":{}},"fontSize":{"defaultValue":null,"description":"","name":"fontSize","required":false,"type":{"name":"ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"fontStyle":{"defaultValue":null,"description":"","name":"fontStyle","required":false,"type":{"name":"ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)"},"tags":{}},"gridAutoColumns":{"defaultValue":null,"description":"","name":"gridAutoColumns","required":false,"type":{"name":"ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"gridAutoFlow":{"defaultValue":null,"description":"","name":"gridAutoFlow","required":false,"type":{"name":"ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)"},"tags":{}},"gridAutoRows":{"defaultValue":null,"description":"","name":"gridAutoRows","required":false,"type":{"name":"ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"gridTemplateAreas":{"defaultValue":null,"description":"","name":"gridTemplateAreas","required":false,"type":{"name":"ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)"},"tags":{}},"gridTemplateColumns":{"defaultValue":null,"description":"","name":"gridTemplateColumns","required":false,"type":{"name":"ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"gridTemplateRows":{"defaultValue":null,"description":"","name":"gridTemplateRows","required":false,"type":{"name":"ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"height":{"defaultValue":null,"description":"","name":"height","required":false,"type":{"name":"ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"justifyContent":{"defaultValue":null,"description":"","name":"justifyContent","required":false,"type":{"name":"ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)"},"tags":{}},"justifyItems":{"defaultValue":null,"description":"","name":"justifyItems","required":false,"type":{"name":"ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)"},"tags":{}},"justifySelf":{"defaultValue":null,"description":"","name":"justifySelf","required":false,"type":{"name":"ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)"},"tags":{}},"left":{"defaultValue":null,"description":"","name":"left","required":false,"type":{"name":"ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"letterSpacing":{"defaultValue":null,"description":"","name":"letterSpacing","required":false,"type":{"name":"ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"lineHeight":{"defaultValue":null,"description":"","name":"lineHeight","required":false,"type":{"name":"ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"marginBottom":{"defaultValue":null,"description":"","name":"marginBottom","required":false,"type":{"name":"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"marginLeft":{"defaultValue":null,"description":"","name":"marginLeft","required":false,"type":{"name":"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"marginRight":{"defaultValue":null,"description":"","name":"marginRight","required":false,"type":{"name":"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"marginTop":{"defaultValue":null,"description":"","name":"marginTop","required":false,"type":{"name":"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"maxHeight":{"defaultValue":null,"description":"","name":"maxHeight","required":false,"type":{"name":"ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"maxWidth":{"defaultValue":null,"description":"","name":"maxWidth","required":false,"type":{"name":"ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"minHeight":{"defaultValue":null,"description":"","name":"minHeight","required":false,"type":{"name":"ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"minWidth":{"defaultValue":null,"description":"","name":"minWidth","required":false,"type":{"name":"ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"order":{"defaultValue":null,"description":"","name":"order","required":false,"type":{"name":"ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<...>[] | undefined>)"},"tags":{}},"paddingBottom":{"defaultValue":null,"description":"","name":"paddingBottom","required":false,"type":{"name":"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"paddingLeft":{"defaultValue":null,"description":"","name":"paddingLeft","required":false,"type":{"name":"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"paddingRight":{"defaultValue":null,"description":"","name":"paddingRight","required":false,"type":{"name":"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"paddingTop":{"defaultValue":null,"description":"","name":"paddingTop","required":false,"type":{"name":"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"position":{"defaultValue":null,"description":"","name":"position","required":false,"type":{"name":"ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"right":{"defaultValue":null,"description":"","name":"right","required":false,"type":{"name":"ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"rowGap":{"defaultValue":null,"description":"","name":"rowGap","required":false,"type":{"name":"ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"textAlign":{"defaultValue":null,"description":"","name":"textAlign","required":false,"type":{"name":"ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"textOverflow":{"defaultValue":null,"description":"","name":"textOverflow","required":false,"type":{"name":"ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)"},"tags":{}},"textTransform":{"defaultValue":null,"description":"","name":"textTransform","required":false,"type":{"name":"ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"top":{"defaultValue":null,"description":"","name":"top","required":false,"type":{"name":"ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"visibility":{"defaultValue":null,"description":"","name":"visibility","required":false,"type":{"name":"ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"whiteSpace":{"defaultValue":null,"description":"","name":"whiteSpace","required":false,"type":{"name":"ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"width":{"defaultValue":null,"description":"","name":"width","required":false,"type":{"name":"ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"borderBottom":{"defaultValue":null,"description":"","name":"borderBottom","required":false,"type":{"name":"ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"borderColor":{"defaultValue":null,"description":"","name":"borderColor","required":false,"type":{"name":"ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)"},"tags":{}},"borderLeft":{"defaultValue":null,"description":"","name":"borderLeft","required":false,"type":{"name":"ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"borderRadius":{"defaultValue":null,"description":"","name":"borderRadius","required":false,"type":{"name":"ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"borderRight":{"defaultValue":null,"description":"","name":"borderRight","required":false,"type":{"name":"ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"borderTop":{"defaultValue":null,"description":"","name":"borderTop","required":false,"type":{"name":"ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"flex":{"defaultValue":null,"description":"","name":"flex","required":false,"type":{"name":"ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"gap":{"defaultValue":null,"description":"","name":"gap","required":false,"type":{"name":"ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"gridArea":{"defaultValue":null,"description":"","name":"gridArea","required":false,"type":{"name":"ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"gridColumn":{"defaultValue":null,"description":"","name":"gridColumn","required":false,"type":{"name":"ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"gridRow":{"defaultValue":null,"description":"","name":"gridRow","required":false,"type":{"name":"ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<...>[] | undefined>)"},"tags":{}},"margin":{"defaultValue":null,"description":"","name":"margin","required":false,"type":{"name":"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"overflow":{"defaultValue":null,"description":"","name":"overflow","required":false,"type":{"name":"ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)"},"tags":{}},"padding":{"defaultValue":null,"description":"","name":"padding","required":false,"type":{"name":"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"bgcolor":{"defaultValue":null,"description":"","name":"bgcolor","required":false,"type":{"name":"ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)"},"tags":{}},"marginX":{"defaultValue":null,"description":"","name":"marginX","required":false,"type":{"name":"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"marginY":{"defaultValue":null,"description":"","name":"marginY","required":false,"type":{"name":"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"paddingX":{"defaultValue":null,"description":"","name":"paddingX","required":false,"type":{"name":"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"paddingY":{"defaultValue":null,"description":"","name":"paddingY","required":false,"type":{"name":"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"},"tags":{}},"typography":{"defaultValue":null,"description":"","name":"typography","required":false,"type":{"name":"ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)"},"tags":{}},"displayPrint":{"defaultValue":null,"description":"","name":"displayPrint","required":false,"type":{"name":"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"},"tags":{}},"locales":{"defaultValue":null,"description":"The locales of the date.","name":"locales","required":false,"type":{"name":"string"},"tags":{}},"format":{"defaultValue":null,"description":"Gets the formatted date according to the string of the tokens passed in.","name":"format","required":false,"type":{"name":"string"},"tags":{}}},"generatedAt":1666102194215}')}}]);