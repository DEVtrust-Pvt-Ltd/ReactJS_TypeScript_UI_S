import DashboardCards from '@/_component/cards/dashboard/DashboardCards'
import BarComponent from '@/_component/common/Charts/BarComponent'
import DonutComponent from '@/_component/common/Charts/DonutComponent'
import LineComponent from '@/_component/common/Charts/LineComponent'
import PieComponent from '@/_component/common/Charts/PieComponent'
import CustomDropDown from '@/_component/common/Dashboard/CustomDropDown'
import React,{ Suspense } from 'react'

const baseStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  margin: "40px 0",
  alignItems: "center",
  flex: "0 0 100%",
};

const pieStyle = {
  flex: "0 0 40%",
};

const barStyle = {
  flex: "0 0 60%",
};
const page = () => {
  return (
    <Suspense>
      <CustomDropDown />
      <DashboardCards />
      <div style={baseStyle}>
        <div style={pieStyle}>
          <PieComponent />
        </div>
        <div style={barStyle}>
          <BarComponent />
        </div>
      </div>

      <div style={baseStyle}>
        <div style={barStyle}>
          <LineComponent />
        </div>
        <div style={pieStyle}>
          <DonutComponent />
        </div>
      </div>

    </Suspense>
  )
}

export default page