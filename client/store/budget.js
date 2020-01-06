import axios from 'axios'

/**
 * ACTION TYPES
 */
const INIT_BUDGET = 'INIT_BUDGET'
const GET_BUDGET = 'GET_BUDGET'
const UPDATE_SPENDING_BUDGET = 'UPDATE_SPENDING_BUDGET'

/**
 * INITIAL STATE
 */
const userBudget = {}

/**
 * ACTION CREATORS
 */
const initBudget = initializedBudget => ({type: INIT_BUDGET, initializedBudget})
const getBudget = budget => ({type: GET_BUDGET, budget})
const updateSpendingBudget = updatedBudget => ({
  type: UPDATE_SPENDING_BUDGET,
  updatedBudget
})

/**
 * THUNK CREATORS
 */
export const initBudgetThunk = userId => async dispatch => {
  console.log('User id: ', userId)
  try {
    await axios.post(
      `https://budgie-budget-server.herokuapp.com/api/budget/${userId}`
    )
    const res = await axios.get(
      `https://budgie-budget-server.herokuapp.com/api/budget/${userId}`
    )
    dispatch(initBudget(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getBudgetThunk = userId => async dispatch => {
  try {
    const res = await axios.get(
      `https://budgie-budget-server.herokuapp.com/api/budget/${userId}`
    )
    dispatch(getBudget(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const updateSpendingBudgetThunk = (
  userId,
  category,
  overallMonthly,
  subcategories
) => async dispatch => {
  try {
    await axios.put(
      `https://budgie-budget-server.herokuapp.com/api/budget/${userId}/spending/update`,
      category,
      overallMonthly,
      subcategories
    )
    const res = await axios.get(
      `https://budgie-budget-server.herokuapp.com/api/budget/${userId}`
    )
    dispatch(updateSpendingBudget(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = userBudget, action) {
  switch (action.type) {
    case INIT_BUDGET:
      return action.initializedBudget
    case GET_BUDGET:
      return action.budget
    case UPDATE_SPENDING_BUDGET:
      return action.updatedBudget
    default:
      return state
  }
}
