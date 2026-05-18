// Multi-step booking modal

const BookingModal = ({ open, onClose }) => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    service: '', addons: [], vehicle: '', size: 'Sedan',
    date: '', time: '', address: '',
    name: '', phone: '', email: '', notes: '',
  });
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const toggleAddon = (a) => setData(d => ({
    ...d, addons: d.addons.includes(a) ? d.addons.filter(x => x !== a) : [...d.addons, a],
  }));

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setStep(1);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const next = () => setStep(s => Math.min(4, s + 1));
  const prev = () => setStep(s => Math.max(1, s - 1));

  const sizeMultiplier = { 'Sedan': 1, 'SUV / Truck': 1.2, 'Large / 3-row': 1.4 };
  const serviceList = [
    'Exterior Car Cleaning',
    'Exterior Protection',
    'Interior Car Cleaning',
    'Deep Interior Cleaning',
    'Full Detail (Exterior + Interior)',
  ];
  const addonList = [
    'Ceramic Coating Boost',
    'Pet Hair Removal',
    'Engine Bay Wash',
    'Headlight Restoration',
    'Paint Correction',
    'Wheel Coating',
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ background: '#0B1A2E', color: 'white', padding: '24px 30px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="eyebrow" style={{ color: '#5C8CE0' }}>Book your detail</div>
              <h3 className="display" style={{ fontSize: 24, margin: '4px 0 0' }}>
                Step {step} of 4 · {['Choose service', 'Vehicle & extras', 'Date & location', 'Your info'][step - 1]}
              </h3>
            </div>
            <button onClick={onClose} style={{
              color: 'white', fontSize: 28, lineHeight: 1, width: 36, height: 36,
              display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.08)', borderRadius: '50%',
            }}>×</button>
          </div>
          {/* Progress */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: 3, background: 'rgba(255,255,255,.1)',
          }}>
            <div style={{
              height: '100%', width: `${(step / 4) * 100}%`,
              background: '#2F7BFF', transition: 'width .3s ease',
            }}></div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '30px', maxHeight: '60vh', overflowY: 'auto' }}>
          {step === 1 && (
            <div>
              <p style={{ margin: '0 0 20px', color: '#5B6B82', fontSize: 14 }}>
                Pick a package. You can add extras on the next step.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {serviceList.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => set('service', name)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '18px 20px', textAlign: 'left',
                      background: data.service === name ? '#0B1A2E' : 'white',
                      color: data.service === name ? 'white' : '#0B1A2E',
                      border: `2px solid ${data.service === name ? '#0B1A2E' : '#DDE3EC'}`,
                      borderRadius: 4, transition: 'all .15s ease',
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 16 }}>{name}</div>
                      <div style={{ fontSize: 12, color: data.service === name ? 'rgba(255,255,255,.6)' : '#5B6B82', marginTop: 2 }}>
                        Mobile · We come to you
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      {data.service === name && (
                        <div style={{ color: '#2F7BFF' }}><Icon.Check /></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="field" style={{ marginBottom: 20 }}>
                <label>Vehicle (year, make, model)</label>
                <input value={data.vehicle} onChange={e => set('vehicle', e.target.value)} placeholder="2021 GMC Sierra" />
              </div>
              <div className="field" style={{ marginBottom: 24 }}>
                <label>Size</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                  {Object.keys(sizeMultiplier).map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => set('size', s)}
                      style={{
                        padding: '14px 10px', fontSize: 13, fontWeight: 600,
                        background: data.size === s ? '#0B1A2E' : 'white',
                        color: data.size === s ? 'white' : '#0B1A2E',
                        border: `2px solid ${data.size === s ? '#0B1A2E' : '#DDE3EC'}`,
                        borderRadius: 4,
                      }}
                    >{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '.14em', color: '#5B6B82', display: 'block', marginBottom: 10 }}>
                  Add-ons (optional)
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {addonList.map((a) => (
                    <label key={a} style={{
                      display: 'flex', alignItems: 'center',
                      padding: '14px 16px',
                      background: data.addons.includes(a) ? 'rgba(30,91,198,.06)' : 'white',
                      border: `1px solid ${data.addons.includes(a) ? '#1E5BC6' : '#DDE3EC'}`,
                      borderRadius: 4, cursor: 'pointer',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <input type="checkbox" checked={data.addons.includes(a)}
                          onChange={() => toggleAddon(a)} style={{ accentColor: '#1E5BC6' }} />
                        <span style={{ fontWeight: 600, fontSize: 14 }}>{a}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="field">
                <label>Preferred date</label>
                <input type="date" value={data.date} onChange={e => set('date', e.target.value)} />
              </div>
              <div className="field">
                <label>Preferred time window</label>
                <select value={data.time} onChange={e => set('time', e.target.value)}>
                  <option value="">Pick a window…</option>
                  <option>Morning (8 AM – 11 AM)</option>
                  <option>Midday (11 AM – 2 PM)</option>
                  <option>Afternoon (2 PM – 5 PM)</option>
                  <option>Evening (5 PM – 7 PM)</option>
                </select>
              </div>
              <div className="field">
                <label>Service address</label>
                <input value={data.address} onChange={e => set('address', e.target.value)} placeholder="123 Main St, Memphis, TN" />
              </div>
              <div className="field">
                <label>Notes for the team</label>
                <textarea rows="3" value={data.notes} onChange={e => set('notes', e.target.value)} placeholder="Gate codes, special requests, parking notes…" />
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                <div className="field">
                  <label>Your name</label>
                  <input value={data.name} onChange={e => set('name', e.target.value)} placeholder="John Smith" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div className="field">
                    <label>Phone</label>
                    <input type="tel" value={data.phone} onChange={e => set('phone', e.target.value)} placeholder="(901) 555-0000" />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" value={data.email} onChange={e => set('email', e.target.value)} placeholder="you@email.com" />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div style={{
                background: '#0B1A2E', color: 'white', padding: 22,
                clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
              }}>
                <div className="eyebrow" style={{ color: '#5C8CE0', marginBottom: 12 }}>Booking summary</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700 }}>Service</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{data.service || '—'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700 }}>Vehicle</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{data.size}{data.vehicle ? ` · ${data.vehicle}` : ''}</span>
                </div>
                {data.addons.length > 0 && (
                  <div style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700, marginBottom: 6 }}>Add-ons</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.9)', lineHeight: 1.5 }}>
                      {data.addons.join(' · ')}
                    </div>
                  </div>
                )}
                {(data.date || data.time) && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700 }}>When</span>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>{[data.date, data.time].filter(Boolean).join(' · ') || '—'}</span>
                  </div>
                )}
                <div style={{ marginTop: 14, padding: 14, background: 'rgba(47,123,255,.12)', border: '1px solid rgba(47,123,255,.3)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#2F7BFF', flexShrink: 0, marginTop: 2 }}><Icon.Sparkle /></span>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.85)', lineHeight: 1.5 }}>
                    We'll text or call within 1 hour with a custom quote based on your vehicle's condition. <strong>No payment due now.</strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '20px 30px', borderTop: '1px solid #DDE3EC',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: '#F6F8FA',
        }}>
          {step > 1 ? (
            <button onClick={prev} style={{
              padding: '10px 16px', fontSize: 13, fontWeight: 700,
              color: '#5B6B82', textTransform: 'uppercase', letterSpacing: '.1em',
            }}>← Back</button>
          ) : <div />}
          {step < 4 ? (
            <button onClick={next} className="btn btn-primary"
              disabled={step === 1 && !data.service}
              style={{ opacity: step === 1 && !data.service ? 0.5 : 1 }}>
              Continue <Icon.Arrow />
            </button>
          ) : (
            <button onClick={() => { onClose(); alert('Booking sent! We\'ll text you within an hour.'); }}
              className="btn btn-primary">
              Send Booking <Icon.Check />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

window.BookingModal = BookingModal;
