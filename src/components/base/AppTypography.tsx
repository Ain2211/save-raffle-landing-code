import { Tooltip, type TooltipProps } from 'antd';
import { type HTMLAttributes, forwardRef, memo } from 'react';

export interface AppTypographyProps extends HTMLAttributes<HTMLDivElement> {
  lineClamp?: number;
  children: React.ReactNode;
  tooltipProps?: TooltipProps;
  noOverflow?: boolean;
}

export const AppTypography = memo(
  forwardRef<HTMLDivElement, AppTypographyProps>(
    ({ lineClamp = 1, style, children, tooltipProps, noOverflow = false, ...props }, ref) => {
      return (
        <Tooltip title={typeof children === 'string' ? children : undefined} {...tooltipProps}>
          <div
            ref={ref}
            style={{
              position: 'relative',
              display: noOverflow ? 'block' : '-webkit-box',
              WebkitLineClamp: noOverflow ? undefined : lineClamp,
              WebkitBoxOrient: noOverflow ? undefined : 'vertical',
              overflow: noOverflow ? 'visible' : 'hidden',
              overflowWrap: noOverflow ? 'normal' : 'anywhere',
              // wordBreak:'break-all',
              ...style,
            }}
            {...props}
          >
            {children}
          </div>
        </Tooltip>
      );
    },
  ),
);

AppTypography.displayName = 'AppTypography';
