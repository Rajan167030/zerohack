import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'

export const ZeroHourLogo = ({ className, size = 32 }: { className?: string; size?: number }) => {
    return (
        <div className={cn('flex items-center gap-2 group', className)}>
            <Zap 
                style={{ width: size, height: size }} 
                className="text-primary fill-primary group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] transition-all duration-300" 
            />
            <div className="flex flex-col">
                <span className='font-mono font-bold text-lg tracking-tight text-foreground'>ZEROHACK</span>
                <span className='font-mono text-[10px] text-muted-foreground -mt-1'>by Stackfolk</span>
            </div>
        </div>
    )
}

export const ZeroHourIcon = ({ className, size = 24 }: { className?: string; size?: number }) => {
    return (
        <Zap 
            style={{ width: size, height: size }} 
            className={cn('text-primary fill-primary', className)} 
        />
    )
}
