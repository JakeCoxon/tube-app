import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import _ from 'lodash'

import { APPBAR_HEIGHT } from 'react-navigation/src/views/Header/Header.js'
import { Constants } from 'expo'

const SMALL = 8;
const LARGE = 16;

const styles = StyleSheet.create({
  regularText: {
    fontFamily: "museo-sans-500", 
    fontSize: 16, 
    lineHeight: 20,
    color: '#333333'
  },
  smallText: {
    fontFamily: "museo-sans-500", 
    fontSize: 13, 
    lineHeight: 16,
    color: '#333333'
  },
  colorWhite: {
    color: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  layer: {
    position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,
  },
  line: {
    alignSelf: 'stretch', borderBottomWidth: StyleSheet.hairlineWidth, 
  },
  appBarSpacing: {
    height: Constants.statusBarHeight + (Platform.OS === 'ios' ? 44 : 56)
  }

})

export const AppBarSpacing = () => 
  <View style={styles.appBarSpacing} />


export const RegularText = (props) =>
  <Text style={[
    styles.regularText, 
    props.white ? styles.colorWhite : props.color ? { color: props.color } : undefined,
    props.style 
  ]} children={props.children} />

export const SmallText = (props) =>
  <Text style={[
    styles.smallText, 
    props.white ? styles.colorWhite : props.color ? { color: props.color } : undefined,
    props.style 
  ]} children={props.children} />

export function Row(props) {
  return <View style={[styles.row, props.style]} children={props.children} />
}

export function Layer(props) {
  return <View style={[styles.layer, props.style]} pointerEvents='box-none' children={props.children} />
}

export function Line(props) {
  return <View style={[styles.line, props.color && { borderBottomColor: props.color }, props.style]} />
}


const spacing = StyleSheet.create({
  smallWidth: { width: SMALL },
  largeWidth: { width: LARGE },
  smallHeight: { height: SMALL },
  largeHeight: { height: LARGE }
})
export function Spacing(props) {
  return <View style={[
    props.small || props.smallX ? spacing.smallWidth : undefined,
    props.large || props.largeX ? spacing.largeWidth : undefined,
    props.small || props.smallY ? spacing.smallHeight : undefined,
    props.large || props.largeY ? spacing.largeHeight : undefined,
    props.x ? { width: props.x } : undefined,
    props.y ? { height: props.y } : undefined,
    props.all ? { width: props.all, height: props.all } : undefined,
    props.style
  ]} />
}


const padding = StyleSheet.create({
  smallLeft: { paddingLeft: SMALL },
  largeLeft: { paddingLeft: LARGE },
  smallRight: { paddingRight: SMALL },
  largeRight: { paddingRight: LARGE },
  smallTop: { paddingTop: SMALL },
  largeTop: { paddingTop: LARGE },
  smallBottom: { paddingBottom: SMALL },
  largeBottom: { paddingBottom: LARGE }
})
export function Padding(props) {
  return <View style={[
    props.small || props.smallX || props.smallLeft ? padding.smallLeft : undefined,
    props.large || props.largeX || props.largeLeft ? padding.largeLeft : undefined,
    props.small || props.smallX || props.smallRight ? padding.smallRight : undefined,
    props.large || props.largeX || props.largeRight ? padding.largeRight : undefined,
    props.small || props.smallY || props.smallTop ? padding.smallTop : undefined,
    props.large || props.largeY || props.largeTop ? padding.largeTop : undefined,
    props.small || props.smallY || props.smallBottom ? padding.smallBottom : undefined,
    props.large || props.largeY || props.largeBottom ? padding.largeBottom : undefined,
    props.all ? { padding: props.all } : undefined,
    props.x ? { paddingLeft: props.x, paddingRight: props.x } : undefined,
    props.y ? { paddingLeft: props.y, paddingRight: props.y } : undefined,
    props.left ? { paddingLeft: props.left } : undefined,
    props.right ? { paddingRight: props.right } : undefined,
    props.top ? { paddingTop: props.top } : undefined,
    props.bottom ? { paddingBottom: props.bottom } : undefined,
    props.style
  ]} children={props.children} />
}

const margin = StyleSheet.create({
  smallLeft: { marginLeft: SMALL },
  largeLeft: { marginLeft: LARGE },
  smallRight: { marginRight: SMALL },
  largeRight: { marginRight: LARGE },
  smallTop: { marginTop: SMALL },
  largeTop: { marginTop: LARGE },
  smallBottom: { marginBottom: SMALL },
  largeBottom: { marginBottom: LARGE }
})
export function Margin(props) {
  return <View style={[
    props.small || props.smallX || props.smallLeft ? margin.smallLeft : undefined,
    props.large || props.largeX || props.largeLeft ? margin.largeLeft : undefined,
    props.small || props.smallX || props.smallRight ? margin.smallRight : undefined,
    props.large || props.largeX || props.largeRight ? margin.largeRight : undefined,
    props.small || props.smallY || props.smallTop ? margin.smallTop : undefined,
    props.large || props.largeY || props.largeTop ? margin.largeTop : undefined,
    props.small || props.smallY || props.smallBottom ? margin.smallBottom : undefined,
    props.large || props.largeY || props.largeBottom ? margin.largeBottom : undefined,
    props.all ? { margin: props.all } : undefined,
    props.x ? { marginLeft: props.x, marginRight: props.x } : undefined,
    props.y ? { marginLeft: props.y, marginRight: props.y } : undefined,
    props.left ? { marginLeft: props.left } : undefined,
    props.right ? { marginRight: props.right } : undefined,
    props.top ? { marginTop: props.top } : undefined,
    props.bottom ? { marginBottom: props.bottom } : undefined,
    props.style
  ]} children={props.children} />
}


const negativeMargin = StyleSheet.create({
  smallLeft: { marginLeft: -SMALL },
  largeLeft: { marginLeft: -LARGE },
  smallRight: { marginRight: -SMALL },
  largeRight: { marginRight: -LARGE },
  smallTop: { marginTop: -SMALL },
  largeTop: { marginTop: -LARGE },
  smallBottom: { marginBottom: -SMALL },
  largeBottom: { marginBottom: -LARGE }
})
export function NegativeMargin(props) {
  return <View style={[
    props.small || props.smallX || props.smallLeft ? negativeMargin.smallLeft : undefined,
    props.large || props.largeX || props.largeLeft ? negativeMargin.largeLeft : undefined,
    props.small || props.smallX || props.smallRight ? negativeMargin.smallRight : undefined,
    props.large || props.largeX || props.largeRight ? negativeMargin.largeRight : undefined,
    props.small || props.smallY || props.smallTop ? negativeMargin.smallTop : undefined,
    props.large || props.largeY || props.largeTop ? negativeMargin.largeTop : undefined,
    props.small || props.smallY || props.smallBottom ? negativeMargin.smallBottom : undefined,
    props.large || props.largeY || props.largeBottom ? negativeMargin.largeBottom : undefined,
    props.all ? { margin: -props.all } : undefined,
    props.x ? { marginLeft: -props.x, marginRight: -props.x } : undefined,
    props.y ? { marginLeft: -props.y, marginRight: -props.y } : undefined,
    props.left ? { marginLeft: -props.left } : undefined,
    props.right ? { marginRight: -props.right } : undefined,
    props.top ? { marginTop: -props.top } : undefined,
    props.bottom ? { marginBottom: -props.bottom } : undefined,
    props.style
  ]} children={props.children} />
}
