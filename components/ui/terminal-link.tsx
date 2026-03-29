import { LucideIcon } from 'lucide-react'

interface TerminalLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function TerminalLink({ href, icon: Icon, label }: TerminalLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center text-xs md:text-sm border border-current px-3 py-2 hover:bg-accent hover:text-background transition-colors terminal-line"
    >
      <span>[</span>
      <Icon className="w-4 h-4 mx-1.5" />
      <span>{label} ]</span>
    </a>
  )
}