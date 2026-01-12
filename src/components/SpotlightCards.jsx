import { useRef, useEffect } from 'react'

function SpotlightCards({ children, className = '' }) {
  const containerRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const overlay = overlayRef.current
    if (!container || !overlay) return

    const cards = Array.from(container.querySelectorAll('.spotlight-card'))

    const applyOverlayMask = (e) => {
      const x = e.pageX - container.offsetLeft
      const y = e.pageY - container.offsetTop
      overlay.style.setProperty('--x', `${x}px`)
      overlay.style.setProperty('--y', `${y}px`)
      overlay.style.setProperty('--opacity', '1')
    }

    const resetOverlay = () => {
      overlay.style.setProperty('--opacity', '0')
    }

    // Create overlay cards
    const createOverlayCards = () => {
      overlay.innerHTML = ''
      cards.forEach((card) => {
        const overlayCard = document.createElement('div')
        overlayCard.classList.add('spotlight-card-overlay')
        overlayCard.style.width = `${card.offsetWidth}px`
        overlayCard.style.height = `${card.offsetHeight}px`
        overlay.appendChild(overlayCard)
      })
    }

    // ResizeObserver for responsive cards
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target)
        if (cardIndex >= 0 && overlay.children[cardIndex]) {
          overlay.children[cardIndex].style.width = `${entry.borderBoxSize[0].inlineSize}px`
          overlay.children[cardIndex].style.height = `${entry.borderBoxSize[0].blockSize}px`
        }
      })
    })

    createOverlayCards()
    cards.forEach((card) => observer.observe(card))

    container.addEventListener('pointermove', applyOverlayMask)
    container.addEventListener('pointerleave', resetOverlay)

    return () => {
      container.removeEventListener('pointermove', applyOverlayMask)
      container.removeEventListener('pointerleave', resetOverlay)
      observer.disconnect()
    }
  }, [children])

  return (
    <div ref={containerRef} className={`spotlight-container ${className}`}>
      <div className="spotlight-cards-inner">
        {children}
      </div>
      <div ref={overlayRef} className="spotlight-overlay" aria-hidden="true" />
    </div>
  )
}

export function SpotlightCard({ children, className = '', hue = 165 }) {
  return (
    <div 
      className={`spotlight-card ${className}`}
      style={{ '--hue': hue }}
    >
      {children}
    </div>
  )
}

export default SpotlightCards
