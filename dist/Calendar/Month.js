import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { CalendarContext } from "../CalendarContext";

const Month = () => {
  const {
    date,
    calendarWidth
  } = useContext(CalendarContext);
  return /*#__PURE__*/React.createElement(MonthBox, {
    calendarWidth: calendarWidth
  }, date.year, "\uB144 ", date.month, "\uC6D4");
};

const MonthBox = styled.div`
    font-size: ${({
  calendarWidth
}) => `${calendarWidth / 21}px`};
    padding: ${({
  calendarWidth
}) => `${calendarWidth / 14}px`};
`;
export default Month;