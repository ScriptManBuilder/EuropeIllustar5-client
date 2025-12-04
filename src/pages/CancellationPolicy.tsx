import React from 'react';
import { Container } from '../styles/GlobalStyles';
import styled from 'styled-components';
import { CONTACT_INFO, COMPANY_INFO } from '../config/constants';
import { usePrice } from '../hooks/usePrice';

const PolicyWrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 80px;
  min-height: 100vh;
  background: var(--minimal-bg);

  @media (max-width: 768px) {
    padding-top: 120px;
    padding-bottom: 60px;
  }
`;

const PolicyContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: var(--minimal-white);
  padding: 60px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 40px 30px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--minimal-text-primary);
  margin-bottom: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const LastUpdated = styled.p`
  color: var(--minimal-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid var(--minimal-gray-200);
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--minimal-text-primary);
  margin-bottom: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
`;

const Subsection = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--minimal-text-primary);
  margin-bottom: 16px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--minimal-text-secondary);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const List = styled.ul`
  margin: 20px 0;
  padding-left: 30px;
`;

const ListItem = styled.li`
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--minimal-text-secondary);
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-left: 4px solid #667eea;
  padding: 24px;
  border-radius: 8px;
  margin: 30px 0;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const HighlightTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 12px;
`;

const HighlightText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--minimal-text-primary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactBox = styled.div`
  background: var(--minimal-gray-50);
  padding: 30px;
  border-radius: 12px;
  margin-top: 40px;
  border: 1px solid var(--minimal-gray-200);

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--minimal-text-primary);
  margin-bottom: 16px;
`;

const ContactInfo = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--minimal-text-secondary);
  margin: 8px 0;

  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Strong = styled.strong`
  color: var(--minimal-text-primary);
  font-weight: 600;
`;

const CancellationPolicy: React.FC = () => {
  const { formatPrice } = usePrice();
  const membershipPrice = 19.99;

  return (
    <PolicyWrapper>
      <Container>
        <PolicyContent>
          <Title>VIP Membership Cancellation Policy</Title>
          <LastUpdated>Last Updated: December 4, 2025</LastUpdated>

          <Section>
            <Paragraph>
              This Cancellation Policy outlines the terms, conditions, and procedures for canceling your 
              VIP Membership subscription with {COMPANY_INFO.name}. Please read this policy carefully 
              to understand your rights and obligations regarding membership cancellation.
            </Paragraph>
          </Section>

          <HighlightBox>
            <HighlightTitle>🎯 Quick Summary</HighlightTitle>
            <HighlightText>
              <Strong>VIP Membership: {formatPrice(membershipPrice)}/month</Strong> • <Strong>3-Day Free Trial Available</Strong> • 
              <Strong>Cancel Anytime</Strong> • Monthly billing cycle • No cancellation fees • 
              Access continues until end of paid period
            </HighlightText>
          </HighlightBox>

          <Section>
            <SectionTitle>1. VIP Membership Overview</SectionTitle>
            
            <Subsection>Membership Value & Duration</Subsection>
            <Paragraph>
              The VIP Membership is a premium subscription service that provides exclusive benefits to our students:
            </Paragraph>
            <List>
              <ListItem><Strong>Monthly Price:</Strong> {formatPrice(membershipPrice)} per month</ListItem>
              <ListItem><Strong>Free Trial:</Strong> 3-day trial period (optional, available at signup)</ListItem>
              <ListItem><Strong>Billing Cycle:</Strong> Monthly recurring subscription</ListItem>
              <ListItem><Strong>Billing Date:</Strong> Same date each month as your subscription start date</ListItem>
              <ListItem><Strong>Payment Method:</Strong> Credit/Debit Card or SEPA Direct Debit</ListItem>
            </List>

            <Subsection>Membership Benefits</Subsection>
            <List>
              <ListItem><Strong>20% Discount</Strong> on all course purchases</ListItem>
              <ListItem><Strong>Priority Customer Support</Strong> with faster response times</ListItem>
              <ListItem><Strong>Exclusive Member-Only Content</Strong> including masterclasses and tutorials</ListItem>
              <ListItem><Strong>Early Access</Strong> to new course releases</ListItem>
              <ListItem><Strong>Monthly Live Q&A Sessions</Strong> with professional illustrators</ListItem>
              <ListItem><Strong>Advanced Training Materials</Strong> not available to non-members</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>2. Billing & Automatic Renewal</SectionTitle>
            
            <Paragraph>
              <Strong>Your VIP Membership will be billed automatically on a monthly basis unless you cancel.</Strong> 
              By subscribing to the VIP Membership, you authorize us to charge your chosen payment method 
              {formatPrice(membershipPrice)} each month on the same day you initially subscribed.
            </Paragraph>

            <Subsection>How Monthly Billing Works</Subsection>
            <List>
              <ListItem>
                <Strong>First Charge:</Strong> If you subscribe with the free trial, your first charge of {formatPrice(membershipPrice)} 
                will occur 3 days after signup. Without a trial, you are charged immediately upon signup.
              </ListItem>
              <ListItem>
                <Strong>Recurring Charges:</Strong> Subsequent charges of {formatPrice(membershipPrice)} occur monthly on the same date 
                as your subscription start (or first paid charge date).
              </ListItem>
              <ListItem>
                <Strong>Auto-Renewal:</Strong> Your membership automatically renews each month until you cancel.
              </ListItem>
              <ListItem>
                <Strong>No Refunds:</Strong> Monthly membership fees are non-refundable once charged, 
                but you retain access for the remainder of your paid period.
              </ListItem>
            </List>

            <HighlightBox>
              <HighlightTitle>💡 Example Billing Timeline</HighlightTitle>
              <HighlightText>
                If you subscribe on <Strong>January 15th with a 3-day trial</Strong>:<br/>
                • <Strong>January 15:</Strong> Trial begins (no charge)<br/>
                • <Strong>January 18:</Strong> First charge of {formatPrice(membershipPrice)}<br/>
                • <Strong>February 18:</Strong> Second charge of {formatPrice(membershipPrice)}<br/>
                • <Strong>March 18:</Strong> Third charge of {formatPrice(membershipPrice)}<br/>
                And so on, every 18th of each month...
              </HighlightText>
            </HighlightBox>
          </Section>

          <Section>
            <SectionTitle>3. Cancellation Process & Timeframes</SectionTitle>
            
            <Paragraph>
              <Strong>You can cancel your VIP Membership at any time, for any reason, without penalty.</Strong> 
              There are no cancellation fees, and the process is straightforward.
            </Paragraph>

            <Subsection>How to Cancel</Subsection>
            <Paragraph>
              To cancel your VIP Membership subscription, you must contact our Customer Service Team:
            </Paragraph>
            <List>
              <ListItem>
                <Strong>Email:</Strong> <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </ListItem>
              <ListItem>
                <Strong>Phone:</Strong> {CONTACT_INFO.phoneFormatted}
              </ListItem>
              <ListItem>
                <Strong>Hours:</Strong> Monday - Friday, 9:00 AM - 6:00 PM (CST)
              </ListItem>
            </List>

            <Subsection>Cancellation Timing & Access</Subsection>
            <List>
              <ListItem>
                <Strong>During Free Trial:</Strong> Cancel anytime during your 3-day trial to avoid being charged. 
                You will lose access immediately upon cancellation during the trial.
              </ListItem>
              <ListItem>
                <Strong>After Trial/During Subscription:</Strong> Cancel anytime during your subscription period. 
                You will retain full VIP access until the end of your current paid billing cycle.
              </ListItem>
              <ListItem>
                <Strong>Before Next Billing Date:</Strong> To avoid the next monthly charge, cancel 
                <Strong> at least 24 hours before your next billing date</Strong>. Cancellations made within 
                24 hours of the billing date may still result in one final charge.
              </ListItem>
              <ListItem>
                <Strong>Confirmation:</Strong> You will receive an email confirmation once your cancellation 
                is processed, showing your last day of VIP access.
              </ListItem>
            </List>

            <HighlightBox>
              <HighlightTitle>⏰ Important Cancellation Deadline</HighlightTitle>
              <HighlightText>
                To ensure you are not charged for the next billing cycle, <Strong>you must cancel at least 
                24 hours before your next billing date</Strong>. For example, if your next billing date is 
                March 18th, cancel by March 17th at the latest to avoid being charged on March 18th.
              </HighlightText>
            </HighlightBox>
          </Section>

          <Section>
            <SectionTitle>4. What Happens After Cancellation</SectionTitle>
            
            <List>
              <ListItem>
                <Strong>VIP Benefits End:</Strong> Your VIP membership benefits (20% discount, priority support, 
                exclusive content, etc.) will expire at the end of your current paid period.
              </ListItem>
              <ListItem>
                <Strong>Course Access Retained:</Strong> You will <Strong>NOT</Strong> lose access to any courses 
                you have already purchased. All purchased courses remain accessible for life.
              </ListItem>
              <ListItem>
                <Strong>No Partial Refunds:</Strong> Monthly membership fees are non-refundable. If you cancel 
                mid-cycle, you will not receive a prorated refund, but you keep access until the paid period ends.
              </ListItem>
              <ListItem>
                <Strong>Re-subscription:</Strong> You can re-subscribe to VIP Membership at any time. A new 
                billing cycle will begin from the date of re-subscription.
              </ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>5. Free Trial Cancellation</SectionTitle>
            
            <Paragraph>
              If you subscribe with the <Strong>3-day free trial</Strong>, you can cancel at any time during 
              the trial period without being charged:
            </Paragraph>
            <List>
              <ListItem>
                <Strong>Trial Duration:</Strong> 3 full days from the moment you subscribe
              </ListItem>
              <ListItem>
                <Strong>Cancel During Trial:</Strong> Contact customer service before the trial ends to cancel 
                and avoid the first {formatPrice(membershipPrice)} charge
              </ListItem>
              <ListItem>
                <Strong>No Charge if Canceled:</Strong> If you cancel during the trial, you will not be charged anything
              </ListItem>
              <ListItem>
                <Strong>Trial Access Ends Immediately:</Strong> Upon trial cancellation, your VIP access ends immediately
              </ListItem>
              <ListItem>
                <Strong>Trial Not Available Again:</Strong> The free trial is a one-time offer per customer
              </ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>6. Refund Policy for VIP Membership</SectionTitle>
            
            <Paragraph>
              <Strong>VIP Membership fees are non-refundable.</Strong> This applies to:
            </Paragraph>
            <List>
              <ListItem>Monthly membership charges of {formatPrice(membershipPrice)}</ListItem>
              <ListItem>Charges made after the free trial period</ListItem>
              <ListItem>Partial month subscriptions (no prorated refunds)</ListItem>
            </List>

            <Paragraph>
              <Strong>Exception:</Strong> If you are charged in error due to a technical issue or billing mistake 
              on our part, we will issue a full refund for that erroneous charge. Contact customer service 
              immediately if you believe you were charged incorrectly.
            </Paragraph>

            <Paragraph>
              <Strong>Note:</Strong> This non-refund policy applies only to VIP Membership fees. Individual course 
              purchases are subject to our separate <a href="/refund-policy" style={{ color: '#667eea', textDecoration: 'underline' }}>Course Refund Policy</a>.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>7. Payment Method Changes & Updates</SectionTitle>
            
            <Paragraph>
              You are responsible for keeping your payment method information up to date. If your payment fails:
            </Paragraph>
            <List>
              <ListItem>
                We will attempt to charge your payment method multiple times over several days
              </ListItem>
              <ListItem>
                You will receive email notifications about failed payment attempts
              </ListItem>
              <ListItem>
                If payment cannot be processed after multiple attempts, your VIP Membership will be automatically 
                suspended
              </ListItem>
              <ListItem>
                You can update your payment method at any time by contacting customer service
              </ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>8. Modifications to Membership Terms</SectionTitle>
            
            <Paragraph>
              We reserve the right to modify the VIP Membership pricing, benefits, or terms at any time. 
              Any changes will be communicated to you via email at least 30 days before taking effect. 
              Continued use of the VIP Membership after changes take effect constitutes acceptance of the new terms.
            </Paragraph>

            <Paragraph>
              <Strong>Price Guarantee:</Strong> If we increase the membership price, existing subscribers will 
              be grandfathered at their current rate for a minimum of 3 months before any price increase applies 
              to their account.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>9. Account Termination by Company</SectionTitle>
            
            <Paragraph>
              We reserve the right to suspend or terminate your VIP Membership for violations of our 
              <a href="/terms-conditions" style={{ color: '#667eea', textDecoration: 'underline', marginLeft: '5px' }}>Terms & Conditions</a>, 
              including but not limited to:
            </Paragraph>
            <List>
              <ListItem>Fraudulent activity or payment disputes</ListItem>
              <ListItem>Sharing account credentials or course materials</ListItem>
              <ListItem>Abusive behavior toward staff or other students</ListItem>
              <ListItem>Violation of intellectual property rights</ListItem>
            </List>

            <Paragraph>
              In such cases, your VIP Membership will be terminated immediately without refund, and you may 
              lose access to the platform entirely.
            </Paragraph>
          </Section>

          <ContactBox>
            <ContactTitle>📞 Questions About Cancellation?</ContactTitle>
            <ContactInfo>
              If you have any questions about this Cancellation Policy or need assistance canceling your 
              VIP Membership, please contact our Customer Service Team:
            </ContactInfo>
            <ContactInfo>
              <Strong>Email:</Strong> <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </ContactInfo>
            <ContactInfo>
              <Strong>Phone:</Strong> {CONTACT_INFO.phoneFormatted}
            </ContactInfo>
            <ContactInfo>
              <Strong>Hours:</Strong> Monday - Friday, 9:00 AM - 6:00 PM (CST)
            </ContactInfo>
            <ContactInfo style={{ marginTop: '20px' }}>
              We're here to help ensure you have the best experience with {COMPANY_INFO.name}. 
              Whether you choose to continue or cancel your membership, we appreciate your time with us!
            </ContactInfo>
          </ContactBox>
        </PolicyContent>
      </Container>
    </PolicyWrapper>
  );
};

export default CancellationPolicy;
