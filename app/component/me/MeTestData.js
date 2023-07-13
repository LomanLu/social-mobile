import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, nowCount } from "../../util/redux/MeTest/MetestSlice";
import { useCallback, useState } from "react";

const MeTestData = () => {
  const dispatch = useDispatch();

  // const count = useSelector(nowCount)

  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }

  function  sub() {
    setCount(count - 1)
  }

  return {
    count,
    add,
    sub
  }

}

export default MeTestData

