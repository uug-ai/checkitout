import React from 'react'
import './Shop.css'

interface Ticket {
  id: number
  name: string
  price: number
  originalPrice?: number
  features: string[]
  popular?: boolean
  soldOut?: boolean
  description: string
}

const tickets: Ticket[] = [
  {
    id: 1,
    name: "Day Pass",
    price: 89,
    originalPrice: 99,
    description: "Access to one day of the festival",
    features: [
      "1 Day Access",
      "All Stages Access",
      "Basic Facilities",
      "Digital Wristband"
    ]
  },
  {
    id: 2,
    name: "3-Day Pass",
    price: 199,
    originalPrice: 249,
    popular: true,
    description: "Full festival experience for all three days",
    features: [
      "3 Days Full Access",
      "All Stages Access",
      "Premium Facilities",
      "VIP Entrance",
      "Exclusive Merchandise",
      "Digital Wristband"
    ]
  },
  {
    id: 3,
    name: "VIP Experience",
    price: 399,
    originalPrice: 499,
    description: "Ultimate luxury festival experience",
    features: [
      "3 Days VIP Access",
      "All Stages + VIP Areas",
      "Premium Facilities",
      "VIP Entrance & Exit",
      "Complimentary Food & Drinks",
      "VIP Camping Area",
      "Exclusive Merchandise",
      "Artist Meet & Greet",
      "Digital Wristband"
    ]
  },
  {
    id: 4,
    name: "Student Pass",
    price: 149,
    originalPrice: 199,
    description: "Special discount for students (ID required)",
    features: [
      "3 Days Full Access",
      "All Stages Access",
      "Basic Facilities",
      "Student Discount Applied",
      "Digital Wristband"
    ]
  },
  {
    id: 5,
    name: "Early Bird Special",
    price: 169,
    originalPrice: 249,
    soldOut: true,
    description: "Limited time early bird offer",
    features: [
      "3 Days Full Access",
      "All Stages Access",
      "Premium Facilities",
      "Early Bird Discount",
      "Digital Wristband"
    ]
  },
  {
    id: 6,
    name: "Group Package (4+)",
    price: 159,
    originalPrice: 199,
    description: "Special pricing for groups of 4 or more",
    features: [
      "3 Days Full Access",
      "All Stages Access",
      "Premium Facilities",
      "Group Discount",
      "Group Check-in",
      "Digital Wristband"
    ]
  }
]

const Shop: React.FC = () => {
  const handlePurchase = (ticketName: string, price: number) => {
    alert(`Redirecting to payment for ${ticketName} - €${price}`)
  }

  const handleFreeTicket = (ticketName: string) => {
    alert(`Congratulations! You've entered the giveaway for ${ticketName}!`)
  }

  return (
    <div className="shop">
      <div className="shop-hero">
        <div className="container">
          <h1 className="shop-title">GET YOUR TICKETS</h1>
          <p className="shop-subtitle">
            Choose your perfect festival experience for Dreamland 2025
          </p>
          <div className="shop-info">
            <div className="info-item">
              <span className="info-icon">📅</span>
              <span>July 18-20, 2025</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span>Boom, Belgium</span>
            </div>
            <div className="info-item">
              <span className="info-icon">🎵</span>
              <span>400+ Artists</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tickets-section">
        <div className="container">
          <h2 className="section-title">CHOOSE YOUR EXPERIENCE</h2>
          
          <div className="tickets-grid">
            {tickets.map((ticket) => (
              <div 
                key={ticket.id} 
                className={`ticket-card ${ticket.popular ? 'popular' : ''} ${ticket.soldOut ? 'sold-out' : ''}`}
              >
                {ticket.popular && <div className="popular-badge">MOST POPULAR</div>}
                {ticket.soldOut && <div className="sold-out-badge">SOLD OUT</div>}
                
                <div className="ticket-header">
                  <h3 className="ticket-name">{ticket.name}</h3>
                  <p className="ticket-description">{ticket.description}</p>
                </div>

                <div className="ticket-price">
                  <span className="current-price">€{ticket.price}</span>
                  {ticket.originalPrice && (
                    <span className="original-price">€{ticket.originalPrice}</span>
                  )}
                </div>

                <div className="ticket-features">
                  {ticket.features.map((feature, index) => (
                    <div key={index} className="feature">
                      <span className="feature-icon">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="ticket-actions">
                  <button
                    className={`btn btn-purchase ${ticket.soldOut ? 'disabled' : ''}`}
                    onClick={() => !ticket.soldOut && handlePurchase(ticket.name, ticket.price)}
                    disabled={ticket.soldOut}
                  >
                    {ticket.soldOut ? 'SOLD OUT' : `BUY NOW - €${ticket.price}`}
                  </button>
                  
                  <button
                    className="btn btn-free"
                    onClick={() => handleFreeTicket(ticket.name)}
                  >
                    🎁 GET FREE TICKET
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="shop-footer">
            <div className="payment-info">
              <h3>Payment & Security</h3>
              <div className="payment-methods">
                <span>💳 Credit Card</span>
                <span>🏦 Bank Transfer</span>
                <span>📱 PayPal</span>
                <span>🔒 Secure Checkout</span>
              </div>
            </div>
            
            <div className="important-info">
              <h3>Important Information</h3>
              <ul>
                <li>All tickets are non-refundable</li>
                <li>Digital wristbands will be sent via email</li>
                <li>Student discounts require valid student ID</li>
                <li>Free ticket entries close 30 days before event</li>
                <li>Group packages require all members to be present at check-in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
