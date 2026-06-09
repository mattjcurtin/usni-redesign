const navItems = [
  { label: 'Series & Topics', href: '/proceedings/series' },
  { label: 'Latest Issue', href: '/proceedings/apr-2026' },
  { label: 'Issue Archive', href: '/proceedings/archive' },
  { label: 'Essay Contests', href: '/essay-contests' },
  { label: 'Contact Proceedings', href: '/proceedings/contact' },
]

export default function ArticleSubNav() {
  return (
    <div className="border-b-4 border-navy-boldest" style={{ backgroundColor: '#E0E0CC' }}>
      <nav className="container-site flex items-center gap-8 h-[62px] overflow-hidden">
        <a
          href="/proceedings"
          className="font-body font-bold text-sm text-navy-boldest uppercase tracking-[0.06em] whitespace-nowrap flex-shrink-0"
        >
          Proceedings
        </a>
        <div className="w-px h-5 bg-navy-boldest/30 flex-shrink-0" />
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-body font-semibold text-sm whitespace-nowrap text-navy-bolder hover:text-navy-subtle transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
