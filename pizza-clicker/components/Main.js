import { useReducer } from 'react';
import Pizza from '../assets/pizza.png';
import TitleObj from './TitleObj';
import UpgradeContent from './UpgradeContent';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Main() {
  const initialState = { slices: 0, dmg: 1, upCost: 10, upVal: 5, lvl: 2 };

  const funcaoReducer = (currentState, action) => {
    const type = action.type;

    if (type === 'INCREMENT') {
      return {
        slices: currentState.slices + currentState.dmg,
        dmg: currentState.dmg,
        upCost: currentState.upCost,
        upVal: currentState.upVal,
        lvl: currentState.lvl,
      };
    } else if (type === 'UPGRADE') {
      if (currentState.slices >= currentState.upCost) {
        if (currentState.dmg % 2 == 0) {
          return {
            slices: currentState.slices - currentState.upCost,
            dmg: currentState.dmg + currentState.upVal,
            upCost: currentState.upCost * 10,
            upVal: currentState.upVal * 2,
            lvl: currentState.lvl + 1,
          };
        } else {
          return {
            slices: currentState.slices - currentState.upCost,
            dmg: currentState.dmg + currentState.upVal,
            upCost: currentState.upCost * 10,
            upVal: currentState.upVal * 10,
            lvl: currentState.lvl + 1,
          };
        }
      } else {
        let insuficient =
          'Pedaços insuficientes! Faltam ' +
          String(currentState.upCost - currentState.slices) +
          ' pedaços';

        console.log(insuficient);
        //alert(insuficient);
      }
    }
    return currentState;
  };

  const [state, funcaoDispatch] = useReducer(funcaoReducer, initialState);

  return (
    <View>
      <TitleObj
        value={state.slices}
        desc="Número de pedaços de pizza que você comeu"
        title="Pedaços"
      />

      <TitleObj
        value={state.dmg}
        desc="Quantidade de pedaços você pode comer de uma vez"
        title="Gula"
      />

      <TouchableOpacity
        style={styles.imgContainer}
        onPress={() => {
          funcaoDispatch({
            type: 'INCREMENT',
            payload: {},
          });
        }}>
        <Image style={styles.img} source={Pizza} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.upgrade}
        onPress={() => {
          funcaoDispatch({
            type: 'UPGRADE',
            payload: {},
          });
        }}>
        <UpgradeContent
          level={state.lvl}
          power={state.upVal}
          cost={state.upCost}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    padding: '1vh',
    margin: '10px',
    borderWidth: '2px',
    borderRadius: '10px',
    borderColor: 'red',
    background: '#f7f7c6',
  },
  img: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain',
    height: '30vh',
    width: null,
  },
  upgrade: {
    background: '#1d9c14',
    padding: '5px',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: '10px',
  },
});
