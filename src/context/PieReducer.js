export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
        case "CALCULATE_BUDGET":
            return{
                ...state,
                categories: [action.payload.hous, action.payload.trans, action.payload.food, 
                action.payload.util, action.payload.med, action.payload.save, action.payload.pers,
                action.payload.ent, action.payload.oth]
            }
      default:
        return state;
    }
  }