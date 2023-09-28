import React, { useReducer } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Pizza from '../../icons/assets/pizza.png';
import TitleObj from './TitleObj';
import UpgradeContent from './UpgradeContent';

export default function Main() {
  const initialState = { slices: 0, dmg: 1, upCost: 10, upVal: 5, lvl: 2 };

  const funcaoReducer = (currentState, action) => {
    const type = action.type;

    if (type === 'INCREMENT') {
      const slices = currentState.slices + currentState.dmg;
      return { ...currentState, slices };
    } else if (type === 'UPGRADE') {
      if (currentState.slices >= currentState.upCost) {
        let upVal = currentState.dmg + currentState.upVal;
        let upCost = currentState.upCost * (upVal % 2 === 0 ? 10 : 100);
        let lvl = currentState.lvl + 1;
        const slices = currentState.slices - currentState.upCost;

        return { ...currentState, slices, dmg: upVal, upCost, upVal, lvl };
      } else {
        let insuficient =
          'Pedaços insuficientes! Faltam ' +
          String(currentState.upCost - currentState.slices) +
          ' pedaços';

        console.log(insuficient);
      }
    }
    return currentState;
  };

  const [state, funcaoDispatch] = useReducer(funcaoReducer, initialState);

  const handleIncrement = () => {
    funcaoDispatch({
      type: 'INCREMENT',
      payload: {},
    });
  };

  const handleUpgrade = () => {
    funcaoDispatch({
      type: 'UPGRADE',
      payload: {},
    });
  };

  return (
    <View style={styles.container}>
      <TitleObj value={state.slices} desc="Número de pedaços de pizza que você comeu" title="Pedaços" />
      <TitleObj value={state.dmg} desc="Quantidade de pedaços você pode comer de uma vez" title="Gula" />

      <TouchableOpacity style={styles.imgContainer} onPress={handleIncrement}>
        <Image style={styles.img} source={Pizza} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.upgrade} onPress={handleUpgrade}>
        <UpgradeContent level={state.lvl} power={state.upVal} cost={state.upCost} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 5,
  },
  imgContainer: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'red',
    backgroundColor: '#f7f7c6',
  },
  img: {
    aspectRatio: 1,
    resizeMode: 'contain',
    width: '100%',
  },
  upgrade: {
    backgroundColor: '#1d9c14',
    padding: 5,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
