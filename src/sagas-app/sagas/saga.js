import { takeLatest, put, delay } from "redux-saga/effects";

function* ageUpAsync() {
  /*
    axios.get(url)
    .then(resp=>{
        yield put {type:"AGE_UP", value:resp.data}
    })
    .catch(err=>{
        yield put {type:"ERROR", value:err}
    })
  */
  yield delay(1500);
  //   yield logDetails();
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}
