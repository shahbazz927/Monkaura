import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function SEOBreadcrumb({ items }: SEOBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 bg-brand-cream-light/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-xs text-brand-dark/70">
        <Link to="/" className="flex items-center gap-1 hover:text-brand-green transition-colors">
          <Home size={13} className="text-brand-green" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.url}>
              <ChevronRight size={12} className="text-brand-dark/40 shrink-0" />
              {isLast ? (
                <span className="font-semibold text-brand-green truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.url} className="hover:text-brand-green transition-colors">
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
