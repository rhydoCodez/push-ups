import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { data } from "@/src/data/chartData"

const PerformaceChart = () => {
  const toPercent = (decimal) => `${decimal.toFixed()}%`

  const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0

    return toPercent(ratio)
  }

  const renderTooltipContent = (o) => {
    const { payload, label } = o
    const total = payload.reduce((result, entry) => result + entry.value, 0)
  }

  return (
    <div className="">
      <ResponsiveContainer width="100%" aspect={2.3}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c28610" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#FED663" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis tickFormatter={toPercent} />
          <CartesianGrid strokeDasharray="3 5" strokeWidth="3 8" />
          <Tooltip content={renderTooltipContent} />
          <Area
            type="monotone"
            dataKey="performance"
            stroke="#995200"
            strokeWidth={3}
            activeDot={{ r: 8, fill: "#080745", strokeWidth: 5 }}
            fillOpacity={10}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformaceChart
