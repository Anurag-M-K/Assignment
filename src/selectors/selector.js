import { createSelector  } from "reselect";

const selectUsers = state=>state.users;

const selectUserById = (state,props) => props.userId;

const makeSelectUser = ()=>
createSelector(
    selectUsers,
    selectUserById,
    
    (users,userId) =>{
        if(Array.isArray(users)){
         users.find(user => user.id === userId)
        }
        return null;
    }
)


export { makeSelectUser }