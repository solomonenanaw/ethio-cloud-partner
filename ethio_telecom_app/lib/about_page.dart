import 'package:flutter/material.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('About Target Solution')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            const CircleAvatar(
              radius: 50,
              backgroundColor: Color(0xFF005EB8),
              child: Icon(Icons.business_outlined, size: 50, color: Colors.white),
            ),
            const SizedBox(height: 24),
            const Text(
              'Target Integrated Solution Trading PLC',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 12),
            const Chip(
              label: Text('Founded 2023'),
              backgroundColor: Color(0xFFF7941D),
              labelStyle: TextStyle(color: Colors.white),
            ),
            const SizedBox(height: 32),
            const Text(
              'Excellence in Technology',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 12),
            const Text(
              'Target Integrated Solution Trading PLC is a premier technology partner in Ethiopia. We specialize in bridging the gap between enterprise-grade technology and local businesses. As an official Ethio Telecom Cloud Reseller, we leverage national infrastructure to provide stability, security, and scalability.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 15, height: 1.6),
            ),
            const SizedBox(height: 32),
            _buildInfoRow(Icons.check_circle, 'Enterprise Cloud Solutions'),
            _buildInfoRow(Icons.check_circle, 'Official Ethio Telecom Partnership'),
            _buildInfoRow(Icons.check_circle, 'Network Infrastructure & CCTV'),
            _buildInfoRow(Icons.check_circle, 'Custom Software Engineering'),
            const SizedBox(height: 40),
            const Divider(),
            const Text(
              '\u00a9 2024 Target Integrated Solution Trading PLC',
              style: TextStyle(color: Colors.grey, fontSize: 12),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoRow(IconData icon, String text) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        children: [
          Icon(icon, color: Colors.green, size: 20),
          const SizedBox(width: 12),
          Text(text, style: const TextStyle(fontSize: 16)),
        ],
      ),
    );
  }
}