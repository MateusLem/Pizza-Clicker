import { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  const initialState = { slices: 0, dmg: 2, upCost: 10, upVal: 2, lvl: 2 };

  const funcaoReducer = (currentState, action) => {
    const type = action.type;

    if (type === 'INCREMENT') {
      const slices = currentState.slices + currentState.dmg;
      return { ...currentState, slices };
    } else if (type === 'UPGRADE') {
      if (currentState.slices >= currentState.upCost) {
        let upVal = currentState.dmg**2;
        let upCost = currentState.upCost + (upVal * 10);
        let lvl = currentState.lvl + 1;
        const slices = currentState.slices - currentState.upCost;

        return { ...currentState, slices, dmg: upVal, upCost, upVal, lvl };
      } else {
        let insuficient =
          'Pedaços insuficientes! Faltam ' +
          String(currentState.upCost - currentState.slices) +
          ' pedaços';

        alert(insuficient);
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
    <View style={styles.appContainer}>
      <Header valSlice={state.slices} valDmg={state.dmg}/>
      <Main increment={handleIncrement} upgrade={handleUpgrade} level={state.lvl} value={state.upVal} cost={state.upCost} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#d6c083',
    borderTopWidth: 40,
    borderColor: 'white',
    padding: 10,
  },
});
