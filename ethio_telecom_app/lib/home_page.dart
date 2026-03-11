import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'services_page.dart';
import 'contact_page.dart';
import 'about_page.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    const String logoAsset = 'assets/images/logo.png';

    return Scaffold(
      appBar: AppBar(
        title: const Text('Target Solution'),
        actions: [
          IconButton(
            icon: const Icon(Icons.info_outline),
            onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (context) => const AboutPage())),
          ),
        ],
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
             DrawerHeader(
              decoration: const BoxDecoration(color: Color(0xFF005EB8)),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  CircleAvatar(
                    radius: 35,
                    backgroundColor: Colors.white,
                    backgroundImage: const AssetImage(logoAsset),
                    child: null,
                  ),
                  const SizedBox(height: 10),
                  const Text('Target Solution', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
                  Text('Technology Partner', style: TextStyle(color: Colors.white.withOpacity(0.8), fontSize: 14)),
                ],
              ),
            ),
            ListTile(
              leading: const Icon(Icons.home),
              title: const Text('Home'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: const Icon(Icons.cloud),
              title: const Text('Our Services'),
              onTap: () {
                Navigator.pop(context);
                Navigator.push(context, MaterialPageRoute(builder: (context) => const ServicesPage()));
              },
            ),
            ListTile(
              leading: const Icon(Icons.contact_phone),
              title: const Text('Contact Us'),
              onTap: () {
                Navigator.pop(context);
                Navigator.push(context, MaterialPageRoute(builder: (context) => const ContactPage()));
              },
            ),
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            _buildHeroSection(context, logoAsset),
            _buildPartnershipSection(logoAsset),
            _buildQuickLinks(context),
            _buildSoftwareSolutionsSection(),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _launchCaller('0960707058'),
        backgroundColor: const Color(0xFFF7941D),
        child: const Icon(Icons.call, color: Colors.white),
      ),
    );
  }

  Widget _buildHeroSection(BuildContext context, String logoAsset) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(24),
      decoration: const BoxDecoration(
        color: Color(0xFF005EB8),
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(30),
          bottomRight: Radius.circular(30),
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Expanded(
                child: Text(
                  'Empowering Ethiopia
with Smart Solutions',
                  style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
                ),
              ),
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(logoAsset, width: 60, height: 60, fit: BoxFit.cover, errorBuilder: (c, e, s) => const Icon(Icons.business, color: Colors.white, size: 40)),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Text(
            'Target Integrated Solution Trading PLC provides cutting-edge technology and Ethio Telecom Cloud Services.',
            style: TextStyle(color: Colors.white.withOpacity(0.9), fontSize: 16),
          ),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (context) => const ServicesPage())),
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFF7941D),
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
            ),
            child: const Text('Explore Services'),
          ),
        ],
      ),
    );
  }

  Widget _buildPartnershipSection(String logoAsset) {
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: Card(
        elevation: 4,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Row(
            children: [
              Image.asset(
                logoAsset,
                width: 70,
                height: 70,
                fit: BoxFit.cover,
                errorBuilder: (c, e, s) => const Icon(Icons.business, size: 50, color: Color(0xFF005EB8)),
              ),
              const SizedBox(width: 16),
              const Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Ethio Telecom Partner', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
                    SizedBox(height: 4),
                    Text('As a cloud reseller, we provide high-performance infrastructure powered by Ethio Telecom.', style: TextStyle(fontSize: 13, color: Colors.grey)),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildQuickLinks(BuildContext context) {
    return GridView.count(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      crossAxisCount: 3,
      padding: const EdgeInsets.all(20),
      children: [
        _buildIconLink(context, Icons.storage, 'Hosting', const ServicesPage()),
        _buildIconLink(context, Icons.security, 'Security', const ServicesPage()),
        _buildIconLink(context, Icons.backup, 'Backup', const ServicesPage()),
      ],
    );
  }

  Widget _buildIconLink(BuildContext context, IconData icon, String label, Widget page) {
    return InkWell(
      onTap: () => Navigator.push(context, MaterialPageRoute(builder: (context) => page)),
      child: Column(
        children: [
          CircleAvatar(
            backgroundColor: const Color(0xFF005EB8).withOpacity(0.1),
            child: Icon(icon, color: const Color(0xFF005EB8)),
          ),
          const SizedBox(height: 8),
          Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w500)),
        ],
      ),
    );
  }

  Widget _buildSoftwareSolutionsSection() {
    final solutions = [
      {'name': 'Clinic System', 'icon': Icons.local_hospital},
      {'name': 'Hospital ERP', 'icon': Icons.business_center},
      {'name': 'Inventory Pro', 'icon': Icons.inventory},
      {'name': 'Hotel Booking', 'icon': Icons.hotel},
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
          child: Text('Software Solutions', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
        ),
        SizedBox(
          height: 120,
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.only(left: 20),
            itemCount: solutions.length,
            itemBuilder: (context, index) {
              return Container(
                width: 140,
                margin: const EdgeInsets.only(right: 15),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(15),
                  border: Border.all(color: Colors.grey.shade200),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(solutions[index]['icon'] as IconData, size: 30, color: const Color(0xFF005EB8)),
                    const SizedBox(height: 8),
                    Text(solutions[index]['name'] as String, style: const TextStyle(fontWeight: FontWeight.w600)),
                  ],
                ),
              );
            },
          ),
        ),
        const SizedBox(height: 30),
      ],
    );
  }

  Future<void> _launchCaller(String number) async {
    final Uri url = Uri(scheme: 'tel', path: number);
    if (await canLaunchUrl(url)) {
      await launchUrl(url);
    }
  }
}