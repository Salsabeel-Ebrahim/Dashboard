
import { BarChart3,FileText, Home,  LogOut,  Settings, ShoppingCart, Tags, Users} from "lucide-react"

const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Reports",
    url: "#",
    icon:  BarChart3,
  },
  {
    title: "Contracts",
    url: "#",
    icon: FileText,
  },
 { title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "Pricing",
    url: "/catalog",
    icon: Tags,
  },
  {
    title: "Settings",
    url: "/setting",
    icon: Settings,
  },
  
]

 export default items