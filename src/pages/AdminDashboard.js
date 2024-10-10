import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AdminDashboard.css';
import emailjs from 'emailjs-com';

function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [subscribers, setSubscribers] = useState([]);
  const [newsletterContent, setNewsletterContent] = useState('');
  const [newSubscriber, setNewSubscriber] = useState('');
  const [editingSubscriber, setEditingSubscriber] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [newsletterUrl, setNewsletterUrl] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.email === 'roayur21@gmail.com') {
        setUser(user);
        fetchSubscribers();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  const fetchSubscribers = async () => {
    const subscribersRef = collection(firestore, 'subscribers');
    const snapshot = await getDocs(subscribersRef);
    const subscriberList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setSubscribers(subscriberList);
  };

  const addSubscriber = async () => {
    if (newSubscriber.trim() !== '') {
      await addDoc(collection(firestore, 'subscribers'), { email: newSubscriber });
      setNewSubscriber('');
      fetchSubscribers();
    }
  };

  const deleteSubscriber = async (id) => {
    await deleteDoc(doc(firestore, 'subscribers', id));
    fetchSubscribers();
  };

  const startEditingSubscriber = (subscriber) => {
    setEditingSubscriber(subscriber);
  };

  const updateSubscriber = async () => {
    if (editingSubscriber) {
      await updateDoc(doc(firestore, 'subscribers', editingSubscriber.id), { email: editingSubscriber.email });
      setEditingSubscriber(null);
      fetchSubscribers();
    }
  };

  const sendNewsletter = async () => {
    try {
      let successCount = 0;
      let failCount = 0;

      for (const subscriber of subscribers) {
        try {
          await emailjs.send(
            'service_zi3y8hl',
            'template_9twhe58',
            {
              to_email: subscriber.email,
              newsletter_url: newsletterUrl, // Use the URL instead of content
              // You can add more template variables here if needed
            },
            'j2i2dzxt_mv5JEf8G'
          );
          successCount++;
        } catch (error) {
          console.error(`Failed to send email to ${subscriber.email}:`, error);
          failCount++;
        }
      }

      if (successCount > 0) {
        alert(`Newsletter sent successfully to ${successCount} subscriber(s)!`);
      }
      if (failCount > 0) {
        alert(`Failed to send newsletter to ${failCount} subscriber(s). Check console for details.`);
      }

      setNewsletterContent('');
      setPdfFile(null);
    } catch (error) {
      console.error('Error sending newsletter:', error);
      alert('Failed to send newsletter. Please try again.');
    }
  };

  if (!user) {
    return <div>Access denied. Please log in as an admin.</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-grid">
        <div className="subscribers-section">
          <h2>Subscribers</h2>
          <div className="add-subscriber">
            <input
              type="email"
              value={newSubscriber}
              onChange={(e) => setNewSubscriber(e.target.value)}
              placeholder="New subscriber email"
            />
            <button onClick={addSubscriber}>Add</button>
          </div>
          <ul className="subscriber-list">
            {subscribers.map(subscriber => (
              <li key={subscriber.id}>
                {editingSubscriber && editingSubscriber.id === subscriber.id ? (
                  <>
                    <input
                      type="email"
                      value={editingSubscriber.email}
                      onChange={(e) => setEditingSubscriber({...editingSubscriber, email: e.target.value})}
                    />
                    <button onClick={updateSubscriber}>Save</button>
                  </>
                ) : (
                  <>
                    {subscriber.email}
                    <button onClick={() => startEditingSubscriber(subscriber)}>Edit</button>
                    <button onClick={() => deleteSubscriber(subscriber.id)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="newsletter-section">
          <h2>Send Newsletter</h2>
          <input
            type="url"
            value={newsletterUrl}
            onChange={(e) => setNewsletterUrl(e.target.value)}
            placeholder="Enter newsletter URL..."
          />
          <button onClick={sendNewsletter}>Send Newsletter</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;