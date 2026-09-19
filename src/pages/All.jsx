import { getAllEntries, markEntriesAsReadInBatches } from "@/apis"
import Content from "@/components/Content/Content"

const getEntries = (status, _starred, filterParams) => getAllEntries(status, filterParams)
const markAllAsRead = () => markEntriesAsReadInBatches(getAllEntries)

const All = () => (
  <Content getEntries={getEntries} info={{ from: "all", id: "" }} markAllAsRead={markAllAsRead} />
)

export default All
