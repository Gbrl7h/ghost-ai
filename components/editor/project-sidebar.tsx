import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
}

function EmptyProjectsState({ message }: { message: string }) {
  return (
    <div className="flex min-h-48 flex-1 items-center justify-center rounded-xl border border-dashed border-surface-border bg-base p-6 text-center text-sm text-copy-muted">
      {message}
    </div>
  )
}

export function ProjectSidebar({ isOpen }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={cn(
        "fixed top-18 bottom-4 left-4 z-40 flex w-[min(22rem,calc(100vw-2rem))] flex-col rounded-2xl border border-surface-border bg-surface/95 p-4 shadow-2xl backdrop-blur transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]"
      )}
    >
      <Tabs className="min-h-0 flex-1" defaultValue="my-projects">
        <TabsList className="w-full bg-subtle">
          <TabsTrigger className="text-copy-secondary" value="my-projects">
            My projects
          </TabsTrigger>
          <TabsTrigger className="text-copy-secondary" value="shared">
            Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent className="mt-4 flex min-h-0 flex-1" value="my-projects">
          <EmptyProjectsState message="You do not have any projects yet." />
        </TabsContent>

        <TabsContent className="mt-4 flex min-h-0 flex-1" value="shared">
          <EmptyProjectsState message="No projects have been shared with you yet." />
        </TabsContent>
      </Tabs>

      <Button className="mt-4 w-full" type="button">
        <Plus className="h-5 w-5" />
        New Project
      </Button>
    </aside>
  )
}
