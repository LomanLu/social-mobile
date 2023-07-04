import { StyleSheet, Text, TextStyle, View, ViewProps } from "react-native";

interface SociabilityProps extends ViewProps {
  title: string
  description: string
  titleStyle?: TextStyle | null
  descriptionStyle?: TextStyle | null
}

const SociabilityView = (props: SociabilityProps) => {

  const titleStyle = () => {
    if (props.titleStyle === null) {
      return {}
    }
    return props.titleStyle
  }

  const descriptionStyle = () => {
    if (props.descriptionStyle === null) {
      return {}
    }
    return props.descriptionStyle
  }

  return <View style={[SociabilityStyle.root, props.style]}>
    <Text numberOfLines={1}
          style={[SociabilityStyle.title , titleStyle()]}
    >
      {props.title}
    </Text>

    <Text numberOfLines={1}
          style={[SociabilityStyle.description, descriptionStyle()]}
    >
      {props.description}
    </Text>
  </View>

}

const  SociabilityStyle = StyleSheet.create({

  root: {
    flex: 1,
    flexDirection: 'row',
  },

  title: {
    marginLeft: 5,
    flexShrink: 5,
  },

  description: {
    marginLeft: 5,
    marginRight: 5,
    flexShrink: 3,
  }

})

export  default SociabilityView
