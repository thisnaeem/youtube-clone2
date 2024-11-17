import Image from "next/image"
import Link from "next/link"
import { Youtube, Search, Bell, Mic, Menu, TrendingUp, Music2, Gamepad2, Film, Newspaper } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function HomePage() {
  return (
    <div className="flex h-screen bg-background">
      <aside className="hidden w-64 border-r bg-card lg:block">
        <div className="flex h-14 items-center border-b px-4">
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Youtube className="h-6 w-6 text-red-500" />
            <span>ViewTube</span>
          </Link>
        </div>
        <nav className="space-y-2 p-4">
          {[
            { icon: TrendingUp, label: "Trending" },
            { icon: Music2, label: "Music" },
            { icon: Gamepad2, label: "Gaming" },
            { icon: Film, label: "Movies" },
            { icon: Newspaper, label: "News" },
          ].map(({ icon: Icon, label }) => (
            <Button key={label} variant="ghost" className="w-full justify-start">
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </Button>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <form className="flex flex-1 items-center space-x-2">
            <Input type="search" placeholder="Search videos..." className="flex-1 rounded-full" />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button size="icon" variant="ghost">
              <Mic className="h-4 w-4" />
              <span className="sr-only">Voice search</span>
            </Button>
          </form>
          <Button size="icon" variant="ghost">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </header>
        <main className="flex-1 overflow-y-auto">
          <div className="container py-6 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Trending Now</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  { title: "Epic Mountain Adventure", views: "2.5M", image: "https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "Cooking Masterclass: Italian Cuisine", views: "1.8M", image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "Future of AI Technology", views: "3.2M", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "Extreme Sports Compilation", views: "1.5M", image: "https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                ].map(({ title, views, image }, i) => (
                  <Link key={i} href="/video" className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={title}
                      width={640}
                      height={360}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white">{title}</h3>
                      <p className="text-sm text-white/80">{views} views • 2 days ago</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
              <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-4 p-4">
                  {[
                    { icon: TrendingUp, label: "Trending" },
                    { icon: Music2, label: "Music" },
                    { icon: Gamepad2, label: "Gaming" },
                    { icon: Film, label: "Movies" },
                    { icon: Newspaper, label: "News" },
                  ].map(({ icon: Icon, label }) => (
                    <Button key={label} variant="outline" className="flex-shrink-0">
                      <Icon className="mr-2 h-4 w-4" />
                      {label}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Recommended for you</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  { title: "Beginner's Guide to Photography", channel: "PhotoPro", views: "450K", image: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "10-Minute Full Body Workout", channel: "FitLife", views: "1.2M", image: "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "The Art of Coffee Making", channel: "CafeCulture", views: "890K", image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "Exploring Ancient Ruins", channel: "HistoryUnveiled", views: "2.1M", image: "https://images.pexels.com/photos/631546/pexels-photo-631546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "DIY Home Decor Ideas", channel: "CreativeLiving", views: "750K", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "Understanding Quantum Physics", channel: "ScienceExplained", views: "1.8M", image: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "Mastering Guitar Solos", channel: "RockLegends", views: "3.2M", image: "https://images.pexels.com/photos/1656066/pexels-photo-1656066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                  { title: "Gourmet Cooking at Home", channel: "ChefSecrets", views: "980K", image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                ].map(({ title, channel, views, image }, i) => (
                  <Link key={i} href="/video" className="group space-y-2">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={title}
                        width={640}
                        height={360}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/60 px-1 py-0.5 text-xs text-white rounded">
                        12:34
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://i.pravatar.cc/32?u=${channel}`} alt={channel} />
                        <AvatarFallback>{channel[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium leading-none">{title}</h3>
                        <p className="text-xs text-muted-foreground">{channel}</p>
                        <p className="text-xs text-muted-foreground">{views} views • 3 days ago</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}